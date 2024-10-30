import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useAnimate, stagger } from "framer-motion";

const menuItems = [
  { id: 1, label: "Home", sectionId: "home" },
  { id: 2, label: "About", sectionId: "about" },
  { id: 3, label: "Our Team", sectionId: "ourteam" },
  { id: 4, label: "Services", sectionId: "services" },
  { id: 5, label: "Contacts", sectionId: "contacts" },
  // { id: 6, label: "Gallery", sectionId: "gallery" },
];

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen, animate]);

  return scope;
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <div ref={scope}>
      <nav
        className={`fixed inset-0 w-screen h-screen bg-primary-brand transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-600 ease-in-out z-50 flex justify-center items-center`}>
        <ul className="flex flex-col items-center justify-center w-full h-full">
          {" "}
          {menuItems.map((item) => (
            <li key={item.id} className="my-6">
              <Link
                to={item.sectionId}
                spy={true}
                smooth={true}
                duration={500}
                className="text-primary-text text-4xl font-bold hover:text-primary-brand transition-colors"
                onClick={() => setIsOpen(false)}>
                {" "}
                {item.label}{" "}
              </Link>{" "}
            </li>
          ))}{" "}
        </ul>{" "}
      </nav>{" "}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4  border-2 border-primary-brand rounded-full p-2 w-12 h-12 z-50 flex items-center justify-center transition-colors hover:border-primary-brand">
        <svg width="23" height="23" viewBox="0 0 23 23">
          <path
            className="top"
            d={isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5"}
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            fill="transparent"
          />{" "}
          <path
            className="middle"
            d="M 2 9.423 L 20 9.423"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            fill="transparent"
            style={{ opacity: isOpen ? 0 : 1 }}
          />{" "}
          <path
            className="bottom"
            d={isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346"}
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>{" "}
      </button>{" "}
    </div>
  );
};

export default Nav;
