import { useAccessibility } from "@/contex/AccessibilityContext";
import { NewsProps } from "@/interface";
import Link from "next/link";

const LatestNews: React.FC<Partial<NewsProps>> = ({
  id,
  image,
  description,
  date,
  name,
}) => {
  const { contrast } = useAccessibility();
  return (
    <>
      <Link href="/projects">
        <div className="latest-inner">
          <img src={image} alt="news-image" />
          <div className="text-card">
            <div className="date-name">
              <span
                className={` ${
                  contrast ? "contrastYellowBg " : "defaultYellowBg  "
                }`}
              >
                {name}
              </span>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M8.30547 6.36079V3.80078C8.30547 3.24078 8.74547 2.80078 9.30547 2.80078C9.86547 2.80078 10.3055 3.24078 10.3055 3.80078V6.36079C10.3055 6.92079 9.86547 7.36079 9.30547 7.36079C8.74547 7.36079 8.30547 6.92079 8.30547 6.36079ZM15.7055 7.36079C16.2655 7.36079 16.7055 6.92079 16.7055 6.36079V3.80078C16.7055 3.24078 16.2655 2.80078 15.7055 2.80078C15.1455 2.80078 14.7055 3.24078 14.7055 3.80078V6.36079C14.7055 6.92079 15.1455 7.36079 15.7055 7.36079ZM8.94547 10.8008H16.0455C16.4855 10.8008 16.8455 10.4408 16.8455 10.0008C16.8455 9.56078 16.4855 9.20078 16.0455 9.20078H8.94547C8.50547 9.20078 8.14547 9.56078 8.14547 10.0008C8.14547 10.4408 8.50547 10.8008 8.94547 10.8008ZM20.1055 4.20078H18.4455C18.0055 4.20078 17.6455 4.56078 17.6455 5.00078C17.6455 5.44078 18.0055 5.80078 18.4455 5.80078H19.3055V19.4008H5.70547V5.80078H6.56547C7.00547 5.80078 7.36547 5.44078 7.36547 5.00078C7.36547 4.56078 7.00547 4.20078 6.56547 4.20078H4.90547C4.46547 4.20078 4.10547 4.64076 4.10547 5.08076V20.2008C4.10547 20.6408 4.46547 21.0008 4.90547 21.0008H20.1055C20.5455 21.0008 20.9055 20.6408 20.9055 20.2008V5.08076C20.9055 4.64076 20.5455 4.20078 20.1055 4.20078ZM11.8455 5.80078H13.1655C13.6055 5.80078 13.9655 5.44078 13.9655 5.00078C13.9655 4.56078 13.6055 4.20078 13.1655 4.20078H11.8455C11.4055 4.20078 11.0455 4.56078 11.0455 5.00078C11.0455 5.44078 11.4055 5.80078 11.8455 5.80078ZM8.94547 14.4008H16.0455C16.4855 14.4008 16.8455 14.0408 16.8455 13.6008C16.8455 13.1608 16.4855 12.8008 16.0455 12.8008H8.94547C8.50547 12.8008 8.14547 13.1608 8.14547 13.6008C8.14547 14.0408 8.50547 14.4008 8.94547 14.4008Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="date">{date}</p>
            </div>
            <div className="inner-text">
              <p>{description}</p>
            </div>
            <button className="more">Види повеќе &rarr;</button>
          </div>
        </div>
      </Link>
    </>
  );
};
export default LatestNews;
