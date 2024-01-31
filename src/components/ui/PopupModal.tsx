import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

type PopupModalProps = {
  children: React.ReactNode;
};

const PopupModal: React.FC<PopupModalProps> = ({ children }) => {
  const { photoId } = useParams();
  console.log(photoId);
  useEffect(() => {
    let mounted = true;

    if (mounted && !!photoId) {
      const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
      modal.showModal();
    }
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <dialog id="my_modal_1" className="modal content-stretch  ">
      <div className="modal-box w-fit p-0 max-w-full rounded-none  ">
        
        <div>{children}</div>
      </div>
    </dialog>
  );
};

export default PopupModal;
