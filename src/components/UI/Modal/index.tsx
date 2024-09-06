import React, { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";

type propTypes = {
  children: React.ReactNode;
  onClose: any;
};

const Modal = (props: propTypes) => {
  const { children, onClose } = props;
  const ref: any = useRef(null);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (ref.current && !ref.current?.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-screen w-screen bg-black bg-opacity-50">
      <div
        ref={ref}
        className={`no-scrollbar max-h-[80vh] w-[80vw] overflow-y-scroll rounded-md bg-white p-5 shadow-md transition-all sm:overflow-auto xl:max-h-[80vh] xl:w-[65vw]`}
      >
        <div ref={componentRef}>{children}</div>
        <button onClick={handlePrint}>Cetak</button>
      </div>
    </div>
  );
};

export default Modal;
