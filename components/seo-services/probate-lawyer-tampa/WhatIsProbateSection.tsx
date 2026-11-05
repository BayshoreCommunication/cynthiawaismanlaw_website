import React from "react";

export function WhatIsProbateSection() {
  const coreTasks = [
    "Filing the will and opening the estate.",
    "Appointing a personal representative when required.",
    "Identifying and protecting estate assets.",
    "Giving required notices to beneficiaries and creditors.",
    "Reviewing and resolving valid estate claims.",
    "Paying approved expenses and obligations.",
    "Distributing remaining assets.",
    "Completing the required accounting and closing the estate.",
  ];

  return (
    <section id="what" className="relative w-full py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-200">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left Column: Description */}
          <div>
            <h2 className="font-serif text-[#091D46] text-2xl sm:text-3xl lg:text-[36px] font-semibold leading-tight mb-4">
              Let’s understand what probate is
            </h2>
            <p className="font-serif text-[#ECAB3C] font-semibold text-lg sm:text-xl leading-relaxed mb-4">
              Probate transfers legal property ownership and clears land titles after someone passes away.
            </p>
            <p className="text-[#586375] text-sm sm:text-base leading-relaxed">
              Probate is the court supervised legal process. This law allows transferring a deceased person&apos;s property to their legal heirs or named beneficiaries. The Probate Division of 13th Judicial Circuit Court in Hillsborough County oversees all local probate cases. During probate, the court validates the decedent&apos;s last will. Then appoints a legal representative and resolves creditor claims. Finally the court approves last asset distributions to beneficiaries.
            </p>
          </div>

          {/* Right Column: Core Tasks List Box */}
          <div>
            <p className="font-bold text-[#091D46] text-base mb-3.5">
              Probate usually involves below core tasks,
            </p>
            <div className="bg-[#091D46] rounded-[22px] p-6 sm:p-8 text-[#e6edf8] shadow-lg">
              <ol className="space-y-3.5 list-none m-0 p-0">
                {coreTasks.map((task, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-4 pt-3 ${
                      index !== 0 ? "border-t border-white/10" : ""
                    }`}
                  >
                    <span className="shrink-0 w-7 h-7 rounded-full bg-[#ECAB3C] text-[#091D46] font-bold text-xs flex items-center justify-center mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-sm sm:text-[15px] leading-relaxed text-[#e6edf8]">
                      {task}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
