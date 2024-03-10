import Product1 from "../../public/alu-classic-matt.jpg";
import Product2 from "../../public/alu-prime-lotus-seidenmatt.jpg";
import Product3 from "../../public/alu-prime-hd-glanz.jpg";
import Product4 from "../../public/alu-prime-metall-gebuerstet.jpg";
import Product5 from "../../public/acryl-classic.jpg";
import SelectedMaterial from "./components/selected-material";
import DraggableIcon from "./components/draggable-icon";
import { useState } from "react";
import Image from "next/image";
import SectionHeader from "./components/section-header";

export default function Home() {
  // const [iconPosition, setIconPosition] = useState({ x: 0, y: 0 });
  const [expandedIndex, setExpandedIndex] = useState(0);

  const products = [
    {
      name: "ALU - Classic Matt",
      benefit1: "Hohe Farbbrillanz (7/10)",
      benefit2: "Pflegeleicht & schnelle Reinigung (7/10)",
      benefit3: "Sehr hohe Hitze-, Kratz- & Schlagfestigkeit (8/10)",
      // benefit4: "Exzellente Hitze-,Kratz- & Schlagfestigkeit (9/10)",
      image: Product1,
      expanded: true,
    },
    {
      name: "ALU Prime - Lotus Seidenmatt",
      benefit1: "Sehr hohe Farbbrillanz (8/10)",
      benefit2: "Besonders Pflegeleicht & länger sauber (10/10)",
      benefit3: "Wasser & Schmutz perlen ab (Prime Lotus-Shield)",
      benefit4: "Exzellente Hitze-,Kratz- & Schlagfestigkeit (9/10)",
      image: Product2,
      expanded: false,
    },
    {
      name: "ALU Prime - HD Glanz",
      benefit1: "Hohe Farbbrillanz (10/10)",
      benefit2: "Besonders Pflegeleicht & länger sauber (10/10)",
      benefit3: "Wasser & Schmutz perlen ab (Prime Lotus-Shield)",
      benefit4: "Exzellente Hitze-,Kratz- & Schlagfestigkeit (9/10)",
      image: Product3,
      expanded: false,
    },
    {
      name: "ALU Prime – Metall Gebürstet",
      benefit1: "Hohe Farbbrillanz (8/10)",
      benefit2: "Besonders Pflegeleicht & länger sauber (9/10)",
      benefit3: "Wasser & Schmutz perlen ab (Prime Lotus-Shield)",
      benefit4: "Exzellente Hitze-,Kratz- & Schlagfestigkeit (9/10)",
      image: Product4,
      expanded: false,
    },
    {
      name: "Acryl - Classic",
      benefit1: "Exzellente Farbbrillanz mit Tiefenwirkung (3D) (9/10)",
      benefit2: "Hohe Hitzebeständigkeit (7/10)",
      benefit3: "Pflegeleicht & schnelle Reinigung (7/10)",
      // benefit4: "Exzellente Hitze-,Kratz- & Schlagfestigkeit (9/10)",
      image: Product5,
      expanded: false,
    },
  ];

  const imageUrl = "/nature.jpg";

  // const handlePositionChange = (e) => {
  //   this.setIconPosition({ x: 1, y: 2 });
  // };

  return (
    <>
      <div className="bg-white text-black py-4 shadow-md">
        <div className="mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="Logo" width={48} height={48} />
          </div>
          <nav className="space-x-4">
            <a href="#" className="hover:text-gray-700">
              Home
            </a>
            <a href="#" className="hover:text-gray-700">
              About
            </a>
            <a href="#" className="hover:text-gray-700">
              Contact
            </a>
          </nav>
        </div>
      </div>
      <div className="mx-auto mx-20 my-8 relative">
        <h1 className="text-3xl font-bold my-4">
          Küchenrückwand - Blumenfeld mit Sonnenstrahlen <br />{" "}
        </h1>
        <small>Ab 17,00€</small>
        <div className="relative pt-5">
          <DraggableIcon imageUrl={imageUrl} />
        </div>
      </div>
      <div className="flex w-full justify-end">
        <div className="grid w-1/2 -mx-5">
          <SectionHeader
            title={"Wähle Dein Material"}
            index={2}
            link={{
              link: "https://www.google.com",
              text: "Wie findest Du die richtigen Maße",
            }}
          ></SectionHeader>

          {products.map((product, index) => (
            <div className="material-selection ml-5" key={index}>
              <SelectedMaterial
                product={product}
                isExpanded={index === expandedIndex}
                currentIndex={index}
                setExpandedIndex={setExpandedIndex}

                // onExpand={() => handleExpand(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
