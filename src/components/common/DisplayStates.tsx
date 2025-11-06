import { cn } from "@/lib/utils"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
type StateType = "empty" | "error" | "loading" | "success" | string;

interface DisplayStateProps {
  /** The type of state to display */
  type?: StateType;
  /** Title text to display */
  title?: string;
  /** Message text to display */
  message?: string;
  /** Custom icon component */
  icon?: ReactNode;
  /** Action component (button, link, etc.) */
  action?: ReactNode;
  /** Optional image URL to display */
  imageUrl?: string;
  /** Additional styles for the container */
  containerStyle?: string;
}

interface StateContent {
  title: string;
  message: string;
  icon?: ReactNode;
  imageUrl?: StaticImageData | string | StaticImport;
}

const DisplayState: React.FC<DisplayStateProps> = ({
  type = "empty",
  title,
  message,
  icon,
  action,
  imageUrl,
  containerStyle,
}) => {
  const defaultContent: Record<string, StateContent> = {
    empty: {
      title: "No Data Available",
      message: "There are no items to display at the moment.",
      imageUrl:
        "https://res.cloudinary.com/dqd2vxqlf/image/upload/v1748017194/Empty_State_1_mnpsq1.png",
    },
    error: {
      title: "Something Went Wrong",
      message: "An error occurred while loading the data.",
      imageUrl:
        "https://res.cloudinary.com/dqd2vxqlf/image/upload/v1748017193/Container_2_r1terl.png",
    },
    loading: {
      title: "Loading",
      message: "Please wait while we load your data.",
      icon: <div className="loader"></div>,
    },
    success: {
      title: "Success!",
      message: "The operation completed successfully.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#38a169"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
    },
  };

  const content = defaultContent[type] || defaultContent.empty;

  const getStateColor = () => {
    switch (type) {
      case "error":
        return "text-red-500";
      case "success":
        return "text-green-500";
      case "loading":
        return "text-blue-500";
      default:
        return "text-gray-500";
    }
  };

  const resolvedImage = imageUrl ?? content?.imageUrl;

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-8 h-[500px]  text-center",
        containerStyle
      )}
    >
      {resolvedImage ? (
        <Image
          src={resolvedImage as StaticImageData | string | StaticImport}
          alt={title || content?.title}
          className="mb-0 max-w-xs"
          width={200}
          height={100}
        />
      ) : (
        <div className={`mb-3 ${getStateColor()}`}>{icon || content.icon}</div>
      )}

      <h3 className="text-base font-bold mb-1 text-black">
        {title || content.title}
      </h3>

      <p className="text-[#8F8F8F] mb-1 text-sm font-normal max-w-xs">
        {message || content.message}
      </p>

      {action && <div className="">{action}</div>}
    </div>
  );
};

export default DisplayState;
