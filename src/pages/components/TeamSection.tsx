import Image from "next/image";
import { useState } from "react";
import React from "react";

// use this variable to display the most recent iteration team for Reactime
const team26: string[][] = [
  ["Garrett Chow", "garrettlchow"],
  ["Ellie Simens", "elliesimens"],
  ["Ragad Mohammed", "ragad-mohammed"],
  ["Daniel Ryczek", "dryczek14"],
  ["Patrice Pinardo", "pinardo88"]
];

const people: string[][] = [
  ["Haider Ali", "hali03"],
  ["Jose Luis Sanchez", "JoseSanchez1996"],
  ["Logan Nelsen", "ljn16"],
  ["Mel Koppens", "MelKoppens"],
  ["Alex Gomez", "alexgomez9"],
  ["Alexander Landeros", "AlexanderLanderos"],
  ["Ali Rahman", "CourageWolf"],
  ["Amy Yang", "ay7991"],
  ["Andrew Byun", "AndrewByun"],
  ["Andy Tsou", "andytsou19"],
  ["Andy Wong", "andynullwong"],
  ["Becca Viner", "rtviner"],
  ["Ben Margolius", "benmarg"],
  ["Ben Michareune", "bmichare"],
  ["Brian Yang", "yangbrian310"],
  ["Bryan Lee", "mylee1995"],
  ["Caitlin Chan", "caitlinchan23"],
  ["Caner Demir", "demircaner"],
  ["Carlos Perez", "crperezt"],
  ["Chris Flannery", "chriswillsflannery"],
  ["Chris Guizzetti", "guizzettic"],
  ["Chris LeBrett", "fscgolden"],
  ["Christina Or", "christinaor"],
  ["Christopher Stamper", "ctstamper"],
  ["Cole Styr", "c-styr"],
  ["Daljit Gill", "dgill05"],
  ["Dane Corpion", "danecorpion"],
  ["David Bernstein", "dangitbobbeh"],
  ["David Chai", "davidchai717"],
  ["David Kim", "codejunkie7"],
  ["David Moore", "Solodt55"],
  ["Dennis Lopez", "DennisLpz"],
  ["Edar Liu", "liuedar"],
  ["Edwin Menendez", "edwinjmenendez"],
  ["Eivind Del Fierro", "EivindDelFierro"],
  ["Emin Tahirov", "eminthrv"],
  ["Ergi Shehu", "Ergi516"],
  ["Eric Yun", "ericsngyun"],
  ["Eva Ury", "evaSUry"],
  ["Feiyi Wu", "FreyaWu"],
  ["Gabriela Aquino", "aquinojardim"],
  ["Greg Panciera", "gpanciera"],
  ["Haejin Jo", "haejinjo"],
  ["Harry Fox", "StackOverFlowWhereArtThou"],
  ["Hien Nguyen", "hienqn"],
  ["Jack Crish", "JackC27"],
  ["Jackie Yuan", "yuanjackie1"],
  ["James McCollough", "j-mccoll"],
  ["James Nghiem", "jemzir"],
  ["Jasmine Noor", "jasnoo"],
  ["Jason Victor", "Theqwertypusher"],
  ["Jesse Guerrero", "jguerrero35"],
  ["Jesse Rosengrant", "jrosengrant"],
  ["Jimmy Phy", "jimmally"],
  ["John Banks", "JBanks123"],
  ["Joshua Howard", "Joshua-Howard"],
  ["Joseph Park", "joeepark"],
  ["Joseph Stern", "josephiswhere"],
  ["Josh Kim", "joshua0308"],
  ["Kelvin Mirhan", "kelvinmirhan"],
  ["Kevin Fey", "kevinfey"],
  ["Kevin HoEun Lee", "khobread"],
  ["Kevin Ngo", "kevin-ngo"],
  ["Khanh Bui", "AndyB909"],
  ["Kim Mai Nguyen", "Nkmai"],
  ["Kris Sorensen", "kris-sorensen"],
  ["Kristina Wallen", "kristinawallen"],
  ["Kyle Bell", "KyEBell"],
  ["Lance Ziegler", "lanceziegler"],
  ["Liam Donaher", "leebology"],
  ["Lina Shin", "rxlina"],
  ["Louis Lam", "llam722"],
  ["Mark Teets", "markteets"],
  ["Mike Bednarz", "mikebednarz"],
  ["Minzo Kim", "minzo-kim"],
  ["Morah Geist", "morahgeist"],
  ["Nate Wa Mwenze", "nmwenz90"],
  ["Nathan Richardson", "BagelEnthusiast"],
  ["Ngoc Zwolinski", "ngoczwolinski"],
  ["Nick Huemmer", "ElDuke717"],
  ["Oliver Cho", "Oliver-Cho"],
  ["Ozair Ghulam", "OzairGh"],
  ["Peng Dong", "d28601581"],
  ["Peter Lam", "dev-plam"],
  ["Prasanna Malla", "prasmalla"],
  ["Quan Le", "blachfog"],
  ["Rajeeb Banstola", "rajeebthegreat"],
  ["Raymond Kwan", "rkwn"],
  ["Robby Tipton", "RobbyTipton"],
  ["Robert Maeda", "robmaeda"],
  ["Rocky Lin", "rocky9413"],
  ["Ruth Anam", "peachiecodes"],
  ["Ryan Dang", "rydang"],
  ["Samuel Tran", "LeumasTr"],
  ["Sanjay Lavingia", "sanjaylavingia"],
  ["Sean Kelly", "Brok3Turtl3"],
  ["Sergei Liubchenko", "sergeylvq"],
  ["Sierra Swaby", "starkspark"],
  ["Tania Lind", "lind-tania"],
  ["Viet Nguyen", "vnguyen95"],
  ["Vincent Nguyen", "VNguyenCode"],
  ["Wilton Lee", "wiltonlee948"],
  ["Yididia Ketema", "yididiaketema"],
  ["Yujin Kang", " yujinkay"],
  ["Zachary Freeman", "zacharydfreeman"],
];

function replace(e: React.SyntheticEvent<HTMLImageElement>): void {
  e.currentTarget.onerror = null;
  e.currentTarget.src = "/profileFallback.png";
}

export default function People(): JSX.Element {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Version 26.0 Team
            </h2>
          </div>
          <ul
            role="list"
            className="mx-auto grid grid-cols-3 gap-x-8 gap-y-8 sm:grid-cols-5 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-5"
          >
            <>
              {team26.map((person) => (
                <Profile key={person[1]} profile={person[1]} name={person[0]} />
              ))}
            </>
          </ul>
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Past Contributors
            </h2>
            <p className="text-xl text-gray-500">
              The awesome team behind Reactime!
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto grid grid-cols-3 gap-x-8 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-8"
          >
            <>
              {people.map((person) => (
                <Profile key={person[1]} profile={person[1]} name={person[0]} />
              ))}
            </>
          </ul>
        </div>
      </div>
    </div>
  );
}
type profileType = {
  profile: string | undefined;
  name: string | undefined;
};
export function Profile({ profile, name }: profileType) {
  const [imageError, setImageError] = useState(false);
  return (
    <div className="space-y-4">
      <Image
        width={100}
        height={100}
        src={
          imageError
            ? "/profileFallback.png"
            : "https://github.com/" + profile + ".png"
        }
        className="mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24"
        onError={(e) => setImageError(true)}
        alt="missing-profile-image"
        data-testid="image"
      />
      <div className="space-y-2">
        <div className="text-xs font-medium lg:text-sm">
          <h3>{name}</h3>
          <a
            target="_blank"
            href={`https://github.com/${profile}`}
            className="text-rose-500"
          >
            {profile}
          </a>
        </div>
      </div>
    </div>
  );
}
