"use client";

export type ContractDetails = {
  tipContract: string;
  numarCF: string;
  locatia: {
    strada: string;
    numar: string;
    apartament: string;
    municipiu: string;
    judet: string;
  };
  detaliiSpatiu: {
    suprafataUtila: string;
    suprafataConstruita: string;
  };
  detaliiLicitare: {
    dataLicitare: string;
    oraLicitare: string;
    locatieLicitare: string;
    pretPornire: string;
    dataDepunereOferta: string;
    oraDepunereOferta: string;
    garantieParticipare: string;
  };
};

type CardProps = {
  card: ContractDetails;
  isFavorite?: boolean;
};

export function Card({ card }: CardProps) {
  return (
    <div className="max-w-full w-full lg:w-3/4 mx-auto bg-red-400 shadow-lg rounded-lg overflow-hidden my-4">
      <div className="px-6 py-4 border-2 bg-secondary">
        <div>
          <span className="font-semibold">Type of Contract: </span>
          {card.tipContract}
          <p className="text-gray-700 text-base mb-2">
            <span className="font-semibold">Number CF: </span>
            {card.numarCF}
          </p>
        </div>
        <div className="font-bold text-lg mt-4 mb-2">Location</div>
        <p className="text-gray-700 text-base">
          {card.locatia.strada}, {card.locatia.numar}, {card.locatia.apartament}
          , {card.locatia.municipiu}, {card.locatia.judet}
        </p>
        <div className="font-bold text-lg mt-4 mb-2">Space Details</div>
        <p className="text-gray-700 text-base mb-2">
          <span className="font-semibold">Usable Area: </span>
          {card.detaliiSpatiu.suprafataUtila}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <span className="font-semibold">Built Area: </span>
          {card.detaliiSpatiu.suprafataConstruita}
        </p>
        <div className="font-bold text-lg mt-4 mb-2">Auction Details</div>
        <p className="text-gray-700 text-base mb-2">
          <span className="font-semibold">Auction Date: </span>
          {card.detaliiLicitare.dataLicitare} at{" "}
          {card.detaliiLicitare.oraLicitare}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <span className="font-semibold">Auction Location: </span>
          {card.detaliiLicitare.locatieLicitare}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <span className="font-semibold">Starting Price: </span>
          {card.detaliiLicitare.pretPornire}
        </p>
        <p className="text-gray-700 text-base mb-2">
          <span className="font-semibold">Offer Submission Date: </span>
          {card.detaliiLicitare.dataDepunereOferta} at{" "}
          {card.detaliiLicitare.oraDepunereOferta}
        </p>
      </div>
    </div>
  );
}
