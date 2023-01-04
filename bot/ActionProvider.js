import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleLanguagePicked = () => {
    const botMessage = createChatBotMessage('Great! I will help you learn more about it.');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

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