import { useState, useEffect } from "react";

import ManagementComponents from "@/components/about-components/ManagementComponent";
import AboutLayout from "@/components/layouts/AboutLayout";
import Modal from "../../components/Modal";
import Image from "next/image";

const MANAGEMENTS = [
  {
    name: "Vice President - DR. AFOLABI ABIODUN ADEBAYO",
    desc: "",
  },
  {
    name: "Financial Secretary - Idowu Adebayo OLALEYE",
    desc: "",
  },
  {
    name: "Assistant General Secretary - AKEJU, FELIX",
    desc: "",
  },
  {
    name: "Chairman Credit Committee - OLUYELU, EMMANUEL",
    desc: "",
  },
  {
    name: "Chairman Supervisory Committee - AIYEDUN, BABATUNDE OLUKEHINDE",
    desc: "",
  },
];

const Management = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [activeProfile, setActiveProfile] = useState<{
    name: string;
    desc: string;
  }>({ name: "", desc: "" });

  const handleClose = (e: any) => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {isOpen && (
        <Modal handleChange={() => handleClose(false)}>
          <div>
            <h2>{activeProfile.name}</h2>
            <p>{activeProfile.desc}</p>
          </div>
        </Modal>
      )}
      <AboutLayout>
        <div>
          <h1 className="text-[2rem]">Our Management</h1>
          <div className="mt-[3rem] grid gap-[2rem]">
            {MANAGEMENTS.map((management, index) => (
              <ManagementComponents
                key={index}
                {...management}
                handleChange={() => {
                  setActiveProfile({
                    name: management.name,
                    desc: management.desc,
                  });
                  setIsOpen(true);
                }}
              />
            ))}
          </div>
        </div>
      </AboutLayout>
    </>
  );
};

export default Management;
