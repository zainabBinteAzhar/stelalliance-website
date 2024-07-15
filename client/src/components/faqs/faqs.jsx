import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./faqs.css";
import data from "../../utils/accordion";

const Faqs = () => {
  return (
    <section id="values" className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/*Right-side*/}
        <div className="flexColStart f-right">
          <span>
            <span className="s1">08</span>
            <span className="s2">—FAQs</span>
          </span>

          <span className="s3">Answering Your Questions</span>
          <span>
            <span className="s4">About</span>
            <span className="s5"> Custom Development</span>
          </span>
          

          {/*Accordion Section*/}
          <Accordion
            className="accordion"
            allowMultipleExpanded={false} //At a single time, only a single section will be expanded
            preExpanded={[5]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <div
                  className={`accordion-item-wrapper ${
                    i % 2 === 0 ? "left" : "right"
                  }`}
                  key={i}
                >
                  <AccordionItem
                    className={`accordionItem ${className}`}
                    key={i}
                    uuid={i} /*for preExpanded, it consider these ids*/
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton className="flexCenter accordionButton">
                        <AccordionItemState
                          /*check either section is opened or not */
                        >
                          {({ expanded }) =>
                            expanded
                              ? setClassName("expanded")
                              : setClassName("collapsed")
                          }
                        </AccordionItemState>
                        <span className="heading">{item.heading}</span>

                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="detail">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </div>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faqs;