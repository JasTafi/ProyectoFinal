import PropTypes from "prop-types";
import { toast } from "react-toastify";

const Notification = ({ message, type }) => {
  const notify = () => {
    switch (type) {
      case "success":
        toast.success(message, {
          position: toast.POSITION.BOTTOM_CENTER
        });
        break;
      case "error":
        toast.error(message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        break;
      default:
        break
    }
  };
  return <>{notify()}</>
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export { Notification };