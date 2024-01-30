import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

type PopupModalProps = {
  children: React.ReactNode;
}

 const PopupModal:React.FC<PopupModalProps> = ({children}) => {
  const { photoId } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    let mounted = true
    
    if(mounted && !!photoId){
      const modal = document.getElementById('my_modal_1') as HTMLDialogElement
      modal.showModal()
    }
    return () => {
      mounted = false
       
    }
  }, [])
  

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">{children}</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn" onClick={() => navigate(-1)}>Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default PopupModal