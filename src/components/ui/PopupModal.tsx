import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

type PopupModalProps = {
  children: React.ReactNode;
};

const PopupModal: React.FC<PopupModalProps> = ({ children }) => {
  const { photoId } = useParams();
  const navigate = useNavigate();
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
    <dialog id="my_modal_1" className="modal content-stretch ">
      <div className="modal-box w-fit p-0 max-w-full rounded-none">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}

          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => navigate(-1)}
          >
            ✕
          </button>
        </form>
        <div>{children}</div>
      </div>
    </dialog>
  );
};

export default PopupModal;
