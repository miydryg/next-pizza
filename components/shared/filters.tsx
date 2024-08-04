import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="u can build" value="1" />
        <FilterCheckbox text="new" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" placeholder="1000" min={100} max={1000} />
        </div>
        <RangeSlider min={0} max={1000} step={10} />
      </div>

      <CheckboxFiltersGroup
        title="ingridiends"
        className="mt-5"
        limit={6}
        defaultItems={[
          { text: "cheese sous", value: "1" },
          { text: "classic sous", value: "2" },
          { text: "zxc sous", value: "3" },
          { text: "ghoul sous", value: "4" },
        ]}
        items={[
          { text: "cheese sous", value: "1" },
          { text: "classic sous", value: "2" },
          { text: "zxc sous", value: "3" },
          { text: "ghoul sous", value: "4" },
          { text: "3srang sous", value: "5" },
          { text: "2srnag sous", value: "6" },
          { text: "21srnag sous", value: "7" },
        ]}
      />
    </div>
  );
};
