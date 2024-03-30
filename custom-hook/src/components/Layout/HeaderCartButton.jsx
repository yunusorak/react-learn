import React from "react";

const HeaderCartButton = ({ setOffCanvas, itemsLength }) => {
  return (
    <>
      <div
        className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
        onClick={() => {
          setOffCanvas(true);
        }}
      >
        <button
          type="button"
          className="text-white flex bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="mr-3"
            width="20px"
            height="20px"
            viewBox="0 -3 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <title>basket</title>
            <desc>Created with Sketch Beta.</desc>
            <defs></defs>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Icon-Set"
                sketch:type="MSLayerGroup"
                transform="translate(-412.000000, -726.000000)"
                fill="#dbeafe"
              >
                <path
                  d="M439.429,738 L434,738 L434,734 L440,734 L439.429,738 L439.429,738 Z M438.571,744 L434,744 L434,740 L439.143,740 L438.571,744 L438.571,744 Z M438,748 C438,749.104 437.104,750 436,750 L434,750 L434,746 L438.286,746 L438,748 L438,748 Z M424,734 L432,734 L432,738 L424,738 L424,734 Z M424,740 L432,740 L432,744 L424,744 L424,740 Z M424,746 L432,746 L432,750 L424,750 L424,746 Z M422,738 L416.286,738 L416,734 L422,734 L422,738 L422,738 Z M422,744 L416.714,744 L416.429,740 L422,740 L422,744 L422,744 Z M422,750 L419,750 C417.896,750 417,749.104 417,748 L416.857,746 L422,746 L422,750 L422,750 Z M443,732 L436.474,732 L438.5,728 L441,728 C441.553,728 442,727.553 442,727 C442,726.447 441.553,726 441,726 L437,726 L433.916,732 L422.168,732 L419,726 L415,726 C414.447,726 414,726.447 414,727 C414,727.553 414.447,728 415,728 L417.5,728 L419.646,732 L413,732 C412.447,732 412,732.448 412,733 C412,733.553 412.447,734 413,734 L414,734 L415,748 C415,750.209 416.791,752 419,752 L436,752 C438.209,752 440,750.209 440,748 L442,734 L443,734 C443.553,734 444,733.553 444,733 C444,732.448 443.553,732 443,732 L443,732 Z"
                  id="basket"
                  sketch:type="MSShapeGroup"
                ></path>
              </g>
            </g>
          </svg>
          Sepetim
          <span className="bg-blue-100 ml-2 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            {itemsLength}
          </span>
        </button>
      </div>
    </>
  );
};

export default HeaderCartButton;
