import obj from "./messageBox";

const MessageMain = function (option, closeAll) {
  if (!closeAll) {
    if (typeof option === "string") {
      option = {
        message: option,
      };
    }

    const position = option.position ?? "center";
    const instanceValue = obj.MessageBoxClass.getInstance(position);

    let instance = instanceValue.value.$mount();

    instance.position = position;

    if (!instanceValue.exist) {
      document.body.appendChild(instance.$el);
    }

    if (option.delay) {
      instance.addDelayCloseMessage(option);
    } else {
      instance.addMessage(option);
    }
  } else {
    const instance = obj.MessageBoxClass.getInstance.instance;
    for (const key in instance) {
      if (Object.hasOwnProperty.call(instance, key)) {
        const element = instance[key];
        element.value.messageArr = [];
      }
    }
  }
};

MessageMain.success = function (option) {
  if (typeof option == "string") {
    MessageMain({ message: option, type: "success" });
  } else {
    MessageMain({ ...option, type: "success" });
  }
};

MessageMain.warning = function (option) {
  if (typeof option == "string") {
    MessageMain({ message: option, type: "warning" });
  } else {
    MessageMain({ ...option, type: "warning" });
  }
};

MessageMain.error = function (option) {
  if (typeof option == "string") {
    MessageMain({ message: option, type: "error" });
  } else {
    MessageMain({ ...option, type: "error" });
  }
};

MessageMain.closeAll = function () {
  MessageMain(null, true);
};

export const Message = MessageMain;
