import { useGetProductField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FilterTypes } from "@/types/filter";

type FilterTasteProps = {
  setFilterTaste: (taste: string) => void;
};

export function FilterTaste({ setFilterTaste }: FilterTasteProps) {
  const { result, loading }: FilterTypes = useGetProductField();

  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Taste</p>

      {loading && result === null && <p>Cargando Taste...</p>}

      <RadioGroup onValueChange={(value) => setFilterTaste(value)}>
        {result !== null &&
          result.schema.attributes.taste &&
          result.schema.attributes.taste.enum?.map((taste: string) => (
            <div key={taste} className="flex items-center space-x-2">
              <RadioGroupItem value={taste} id={taste} />
              <Label htmlFor={taste}>{taste}</Label>
            </div>
          ))}
      </RadioGroup>
    </div>
  );
}
