import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import { cities } from "../data";

const CitySelection = ({ cop, cops, setCops }) => {
  return (
    <>
      <div className="flex items-center gap-4">
        <label htmlFor="country" className="text-lg min-w-[125px]">
          Select City:
        </label>
        <Dialog>
          <DialogTrigger>
            <input
              autoComplete="off"
              type="text"
              onChange={() => {}}
              value={cop.city}
              name="country"
              id="country"
              className="p-2 border-2 border-fuchsia-900 rounded bg-fuchsia-300 cursor-pointer"
            />
          </DialogTrigger>
          <DialogContent className="min-w-[90vw] max-h-[80vh] overflow-auto">
            <DialogHeader>
              <DialogTitle className="text-center">Select City:</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-5 gap-4">
              {cities.map(({ name, distance, url }, index) => {
                const isCityAlreadySelectedByAnotherCop = cops.find(
                  (cop) => cop.city === name
                );

                return (
                  <DialogClose
                    asChild
                    key={index}
                    className={
                      !!isCityAlreadySelectedByAnotherCop
                        ? "pointer-events-none"
                        : "pointer-events-auto"
                    }
                    style={{
                      opacity: !!isCityAlreadySelectedByAnotherCop ? 0.5 : 1,
                    }}
                    onClick={() => {
                      let copsCopy = [...cops];
                      copsCopy[cop.cop - 1].city = name;
                      setCops(copsCopy);
                    }}
                  >
                    <div
                      key={index}
                      className="flex flex-col border-2 border-fuchsia-900 rounded-lg cursor-pointer overflow-hidden pb-4"
                    >
                      <img src={url} alt={name} className="mb-2" />
                      <p className="text-center text-xl">{name}</p>
                      <p className="text-center">({distance} KM)</p>
                      {isCityAlreadySelectedByAnotherCop && (
                        <p className="text-center underline underline-offset-2">
                          Selected by Cop {isCityAlreadySelectedByAnotherCop.cop}
                        </p>
                      )}
                    </div>
                  </DialogClose>
                );
              })}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default CitySelection;
