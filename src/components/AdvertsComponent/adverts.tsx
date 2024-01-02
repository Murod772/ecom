import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import BasicTableComponent from "./table";
import SubjectPriorityComponent from "./subjectPriority";

const AdvertsComponent: React.FC = () => {
  const [page, setPage] = useState(1);
  const adverts = useSelector(
    (state: RootState) => state.adverts.searchResults
  );
  const hasAdverts = adverts && Array.isArray(adverts.bets);

  console.log(adverts);
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-wrap md:flex-nowrap gap-10">
        {/* Adverts table column */}
        <div className="flex-1">
          {Array.isArray(adverts.bets) && (
            <BasicTableComponent data={adverts.bets} />
          )}
        </div>

        {/* Subject priorities column */}
        <div className="w-full md:w-1/4">
          {adverts?.subject_priorities && (
            <SubjectPriorityComponent
              subjectPriorities={adverts.subject_priorities}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvertsComponent;
