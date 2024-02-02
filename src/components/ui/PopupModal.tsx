import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

type PopupModalProps = {
  children: React.ReactNode;
};

const PopupModal: React.FC<PopupModalProps> = ({ children }) => {
  const { photoId } = useParams();
  const navigate = useNavigate();

  const keyDownHandler = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      navigate(-1);
    }
  };

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      window.addEventListener("keydown", keyDownHandler);
    }

    if (mounted && !!photoId) {
      const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
      modal.showModal();
    }
    return () => {
      mounted = false;
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <dialog id="my_modal_1" className="modal content-stretch  ">
      <div className="modal-box w-fit max-w-full rounded-none p-0  ">
        <div>{children}</div>
      </div>
    </dialog>
  );
};

export default PopupModal;
