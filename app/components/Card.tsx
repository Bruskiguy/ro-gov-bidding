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
          className="rounded-lg object-cover"
        />
        <div className="m-5 ml-10 flex-1">
          <span className="font-bold text-2xl">
            Contract de {card.tipContract}:{" "}
          </span>
          <p className="text-gray-700 text-base flex-wrap">
            {card.locatia.strada}, {card.locatia.numar},{" "}
            {card.locatia.apartament}, {card.locatia.municipiu},{" "}
            {card.locatia.judet}
          </p>
          <div className="flex-1 mt-5 mb-12">
            <div className="font-bold text-lg mb-2"> Auction Details</div>
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
            <div className="font-bold text-lg mt-10 mb-2 flex justify-items-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-6 h-6 text-white"
              >
                <path
                  fill="white"
                  d="M.2 468.9C2.7 493.1 23.1 512 48 512l96 0 320 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-64-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-64-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-48c0-26.5-21.5-48-48-48L48 0C21.5 0 0 21.5 0 48L0 368l0 96c0 1.7 .1 3.3 .2 4.9z"
                />
              </svg>
              <p className="text-gray-700 text-base mb-2 mx-2">
                <span className="font-semibold">Usable Area: </span>
                {card.detaliiSpatiu.suprafataUtila}.{" "}
              </p>
              <p className="text-gray-700 text-base mb-2">
                <span className="font-semibold"> Built Area: </span>
                {card.detaliiSpatiu.suprafataConstruita}
              </p>
            </div>
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
    </div>
  );
}
