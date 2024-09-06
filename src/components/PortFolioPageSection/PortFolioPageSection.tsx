import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

// Define the types for the component props
type VisibilitySectionProps = {
  children: React.ReactNode;
  id: string;
};

// Define the type for the function that `VisibilitySensor` will call
type VisibilitySensorCallbackProps = {
  isVisible: boolean;
};

export const PortFolioPageSection: React.FC<VisibilitySectionProps> = ({ children, id }) => {
  return (
    <VisibilitySensor partialVisibility>
      {({ isVisible }: VisibilitySensorCallbackProps) => (
        <section className={`${isVisible ? 'fade-in-up' : ''}`} id={id}>
          {children}
        </section>
      )}
    </VisibilitySensor>
  );
};
