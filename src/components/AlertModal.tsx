import { Transition } from '@headlessui/react';
import { AlertState } from '../context/alertContext';
import { IoCloseCircleOutline } from 'react-icons/io5';

const AlertModal = () => {
  const {
    alertState: { type, message, show },
    alertDispatch,
  } = AlertState();
  const handleClose = () => {
    alertDispatch({ type: 'ALERT_CLEAR' });
  };
  return (
    <div className="text-black ">
      <div className="fixed z-40 inset-0 overflow-y-auto">
        <div className="flex items-start justify-center min-h-screen pt-20  px-4 pb-20 text-center sm:block sm:p-0">
          <Transition
            show={show}
            enter="ease-out duration-600"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-black opacity-10"></div>
            </div>
          </Transition>

          <span
            className="hidden sm:inline-block sm:align-top sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div
            className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="flex ">
              <div className="flex flex-1 items-stretch">
                <div
                  className={`w-20 flex items-center ${
                    type === 'ALERT_SUCCESS'
                      ? 'bg-temp-green-500'
                      : type === 'ALERT_ERROR'
                        ? 'bg-red-600'
                        : 'bg-temp-primary'
                  } `}
                >
                  <p className="inline-flex items-center justify-center px-6">
                    {type === 'ALERT_SUCCESS' ? (
                      <svg
                        width="27"
                        height="19"
                        viewBox="0 0 27 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.191 0.565912L9.89443 13.236L3.55939 6.6921C2.724 5.85671 1.4013 5.85671 0.635527 6.62248C-0.199862 7.45787 -0.199861 8.78057 0.565913 9.54634L8.36288 17.5521C8.78058 17.9698 9.3375 18.1787 9.82481 18.1787C10.3121 18.1787 10.869 17.9698 11.2867 17.6218L26.1149 3.55939C26.9503 2.79362 27.0199 1.47092 26.1845 0.635527C25.3491 -0.199862 24.0264 -0.199861 23.191 0.565912Z"
                          fill="url(#paint0_linear)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="13.3887"
                            y1="-17.1513"
                            x2="13.3887"
                            y2="38.0985"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#77FFB9" />
                            <stop offset="1" stopColor="#03C16C" />
                          </linearGradient>
                        </defs>
                      </svg>
                    ) : type === 'ALERT_ERROR' ? (
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M16 21.5565C15.1054 21.5565 14.3555 22.3064 14.3555 23.201C14.3555 24.0957 15.1054 24.8456 16 24.8456C16.8617 24.8456 17.6445 24.0957 17.605 23.2405C17.6445 22.2998 16.9012 21.5565 16 21.5565Z"
                            fill="#FDAA88"
                          />
                          <path
                            d="M31.2213 27.3847C32.2541 25.6021 32.2607 23.4773 31.2345 21.7013L20.9332 3.86147C19.9136 2.06565 18.0717 1 16.0062 1C13.9407 1 12.0988 2.07223 11.0792 3.85489L0.764735 21.7144C-0.261448 23.5102 -0.25487 25.6481 0.784469 27.4308C1.81065 29.1937 3.64594 30.2528 5.69831 30.2528H26.2746C28.3335 30.2528 30.182 29.1805 31.2213 27.3847ZM28.9848 26.0954C28.4125 27.0821 27.3994 27.6676 26.268 27.6676H5.69173C4.57345 27.6676 3.567 27.0953 3.00787 26.1283C2.44215 25.1482 2.43557 23.9773 3.00129 22.9906L13.3157 5.13762C13.8749 4.15748 14.8747 3.57861 16.0062 3.57861C17.131 3.57861 18.1375 4.16406 18.6966 5.1442L29.0045 22.9971C29.5571 23.9575 29.5505 25.1153 28.9848 26.0954Z"
                            fill="#FDAA88"
                          />
                          <path
                            d="M15.5918 10.012C14.809 10.2357 14.3223 10.9461 14.3223 11.8078C14.3617 12.3275 14.3946 12.8537 14.4341 13.3734C14.5459 15.3534 14.6577 17.294 14.7696 19.274C14.809 19.9449 15.3287 20.4317 15.9997 20.4317C16.6706 20.4317 17.1969 19.912 17.2298 19.2345C17.2298 18.8267 17.2298 18.4517 17.2693 18.0373C17.3416 16.7677 17.4205 15.4981 17.4929 14.2286C17.5324 13.4063 17.6047 12.584 17.6442 11.7618C17.6442 11.4658 17.6047 11.2026 17.4929 10.9395C17.1574 10.2028 16.3746 9.82782 15.5918 10.012Z"
                            fill="#FDAA88"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="32" height="32" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : (
                      ' '
                    )}
                  </p>
                </div>
                <div className="bg-white px-3 py-5 sm:px-4 sm:py-5">
                  <p className="text-sm md:text-base font-sans text-temp-gray ">
                    {message ||
                      'Please wait while for the process this information'}
                  </p>
                </div>
              </div>
              <div
                className="font-bold flex items-center justify-end px-3"
                onClick={handleClose}
              >
                <IoCloseCircleOutline className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
