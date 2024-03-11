const ResultPage = ({ cops, criminalEscapedCity }) => {
  const vehicleRanges = {
    "EV Bike": 60,
    "EV Car": 100,
    "EV SUV": 120,
  };

  const cityDistances = {
    Yapkashnagar: 60,
    Lihaspur: 50,
    "Narmis City": 40,
    Shekharvati: 30,
    Nuravgram: 20,
  };

  const isUniqueSelection = (copData, allCopsData) => {
    const chosenCity = copData.city;
    return !allCopsData.some(
      (otherCopData) =>
        otherCopData !== copData && otherCopData.city === chosenCity
    );
  };

  const getVehicleRange = (vehicleType) => vehicleRanges[vehicleType];

  const getDistance = (cityName) => cityDistances[cityName];

  const checkCopChoice = (cop) => {
    const chosenCity = cop.city;
    const vehicleRange = getVehicleRange(cop.vehicle);
    const distance = getDistance(chosenCity);

    return (
      vehicleRange >= distance * 2 &&
      isUniqueSelection(cop, cops) &&
      chosenCity === criminalEscapedCity
    );
  };

  const findCriminal = () => {
    if (cops) {
      const successfulCop = cops.find((cop) => checkCopChoice(cop));
      return successfulCop
        ? `Cop ${successfulCop.cop} successfully captured the fugitive!`
        : "The fugitive escaped again!";
    }
    return "No cops available.";
  };

  return (
    <div className="bg-fuchsia-900 h-screen flex items-center justify-center">
      <p className="text-3xl text-white">{findCriminal()}</p>
    </div>
  );
};

export default ResultPage;
