"use client";
import { useState } from "react";
import { processStepsData } from "../homepageData/processCardData";

export default function ExpandbleCard() {
  const [activeStepId, setActiveStepId] = useState<number>(1);


  return (
    <div
      className="process-steps-board d-flex flex-column flex-lg-row border rounded shadow-sm overflow-hidden bg-white"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      {processStepsData.map((step) => {
        // Evaluate active boolean matching the currently hovered step block index
        const isActive = activeStepId === step.id;

        return (
          <div
            key={step.id}
            data-step={step.id}
            className={`step-item-card ${step.className || ""} ${isActive ? "is-active" : ""}`}
            // Seamlessly trigger class state switches when the mouse cursor enters a card block
            onMouseEnter={() => setActiveStepId(step.id)}
          >
            <div className="step-number-badge mb-4">
              {step.stepNumber}
            </div>

            <div className="step-text-wrapper">
              <div className="step-icon">
                {step.icon}
              </div>

              <h3 className="step-card-title fz-24 mb-3">
                {step.title}
              </h3>

              <div className="step-card-desc fz-16">
                <p className="mb-0">
                  {step.visibleDesc}{" "}
                  <span className="text-hidden">
                    <span>
                      {step.hiddenDesc}
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
