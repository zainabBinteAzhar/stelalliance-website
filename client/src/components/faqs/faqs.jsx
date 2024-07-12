import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./faqs.css";
import data from "../../utils/accordion";

const Faqs = () => {
  return (
    <section id="values" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/*Right-side*/}
        <div className="flexColStart v-right">
          <span>
            <span>08</span>
            <span>—FAQs</span>
          </span>

          <span>Answering Your Questions</span>
          <span>
            <span>About</span>
            <span> Custom Development</span>
          </span>
          <span className="secondaryText">
            We are always ready to provide users with the best services
            <br /> A good platform that is easy to use and easy to understand.
          </span>

          {/*Accordion Section*/}
          <Accordion
            className="accordion"
            allowMultipleExpanded={false} //At a single time, only a single section will be expanded
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                /*if expanded, then give accordionItem with className expanded else notExpanded*/
                <AccordionItem
                  className={`accordionItem ${className}`}
                  key={i}
                  uuid={i} /*for preExpanded, it consider these ids*/
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <AccordionItemState /*check either section is opened or not */
                      >
                        {
                          /*if expanded, then set className to expanded, else set className to collapsed*/
                          //check? true condition: falseCondition
                          ({ expanded }) =>
                            expanded
                              ? setClassName("expanded")
                              : setClassName("collapsed")
                        }
                      </AccordionItemState>

                      <div className="flexCenter icon">{item.icon}</div>

                      <span className="primaryText">{item.heading}</span>

                      <div className="flexCenter icon1">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
