import { notification } from "antd";

export const openNotification = (title, description, success) => {
    if (success) {
      notification.open({
        message: title,
        description: description,
        duration: 0,
        // icon: <HeartOutlined />,
      });
    } else {
      notification.open({
        message: title,
        description: description,
        duration: 0,
        // icon: <CloseOutlined />,
      });
    }
  };