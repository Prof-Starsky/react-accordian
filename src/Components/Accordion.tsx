import { useState } from "react";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${isOpen ? "" : "collapsed"}`}
              type="button"
              onClick={toggleAccordion}
              aria-expanded={isOpen}
              aria-controls="accordion-content"
            >
              {title}
            </button>
          </h2>
          <div
            id="accordion-content"
            className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
            aria-labelledby="accordion-header"
          >
            <div className="accordion-body">{content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
