"use client";

import Image from "next/image";
import { useState } from "react";

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
    imageUrl: string;
  };
};

type CardProps = {
  card: ContractDetails;
  isFavorite?: boolean;
};

export function Card({ card, isFavorite = false }: CardProps) {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
  };

  return (
    <div className="relative max-w-full w-full lg:w-4/5 mx-auto shadow-lg rounded-lg overflow-hidden my-4">
      <div className="px-6 py-4 bg-primary-900/50 hover:bg-primary-800/50 flex transition-colors duration-300 ease-in-out">
        <Image
          src={card.detaliiLicitare.imageUrl}
          width={200}
          height={200}
          alt={card.locatia.judet}
          className="rounded-lg"
        />
        <div className="m-5 flex-1">
          <span className="font-semibold">
            Contract de {card.tipContract}:{" "}
          </span>
          <p className="text-gray-700 text-base flex-wrap">
            {card.locatia.strada}, {card.locatia.numar},{" "}
            {card.locatia.apartament}, {card.locatia.municipiu},{" "}
            {card.locatia.judet}
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
        </div>
        <div className="m-5 flex-1 mb-12">
          <div className="font-bold text-lg mb-2">Auction Details</div>
          <p className="text-gray-700 text-base mb-2">
            <span className="font-semibold">Number CF: </span>
            {card.numarCF}
          </p>
          <p className="text-gray-700 text-base mb-2">
            <span className="font-semibold">Auction Date: </span>
            {card.detaliiLicitare.dataLicitare} at{" "}
            {card.detaliiLicitare.oraLicitare} in{" "}
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
      <button
        onClick={handleFavoriteClick}
        className={`absolute top-4 right-4 text-2xl transition-transform duration-300 ease-in-out ${
          favorite ? "text-yellow-500" : "text-gray-400"
        } hover:scale-110`}
      >
        ★
      </button>
      <button className="absolute bottom-4 right-4 bg-accent-500 text-white px-4 py-2 rounded transition-colors duration-300 ease-in-out hover:bg-accent-700 cursor-pointer">
        See Details
      </button>
    </div>
  );
}
