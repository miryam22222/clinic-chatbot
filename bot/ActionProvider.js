import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const handleLanguagePicked = () => {
    //create custom message
    const botMessage = createChatBotMessage('Great! I will help you learn more about it.');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Put the handleHello and handleDog function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleLanguagePicked
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;