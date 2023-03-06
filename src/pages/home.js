import React from "react";
import Languageoption from "../component/language-dropdown";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { NavLink } from "react-router-dom";
import {
  DesktopArrowRight24Regular,
  PhoneTablet24Regular,
  PhonePagination24Regular,
  Rss24Filled,
  DrawText24Filled,
  Home24Filled,
  Scan24Regular,
  Smartwatch24Regular,
  PersonSync24Regular,
  StarSettings24Regular,
  StoreMicrosoft24Regular,
  ZoomIn24Regular,
} from "@fluentui/react-icons";

import { makeStyles, Button } from "@fluentui/react-components";

const useStyles = makeStyles({
  listItem: {
    listStyle: "none",
    color: "#ffffff",
    backgroundColor: "#c8d1fa",
  },
  list: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingRight: "40px",
  },
  link: {
    color: "#63276d",
    textDecoration: "none",
  },
  wrapper: {
    marginTop: "20px",
  },
});

const Home = () => {
  const { t } = useTranslation();
  const styled = useStyles();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  return (
    <>
      <Languageoption onChange={(e) => handleClick(e)} />

      <div className={styled.wrapper}>
        <Button
          shape="circular"
          onClick={() => {
            document.body.style.background = "#fff";
            const div = document.getElementById("root");
            div.style.backgroundColor = "#fff";
          }}
        >
          {t("Light")}
        </Button>
        <Button
          shape="circular"
          onClick={() => {
            document.body.style.background = "#000";
            const div = document.getElementById("root");
            div.style.backgroundColor = "#000";
          }}
        >
          {t("Dark")}
        </Button>
      </div>
      <ul className={styled.list}>
        <li key={1} className={styled.listItem}>
          <NavLink to="/system/" className={styled.link}>
            <DesktopArrowRight24Regular />
            <h3>{t("System")}</h3>
            <p>{t("Screen")}</p>
          </NavLink>
        </li>
        <li key={2} className={styled.listItem}>
          <NavLink to="/devices">
            <PhoneTablet24Regular />
            <h3>{t("Devices")}</h3>
            <p>{t("bluetooth, printers, mouse")}</p>
          </NavLink>
        </li>
        <li key={3} className={styled.listItem}>
          <NavLink to="/telephone">
            <PhonePagination24Regular />
            <h3>{t("Telephone")}</h3>
            <p>{t("Link")}</p>
          </NavLink>
        </li>
        <li key={4} className={styled.listItem}>
          <NavLink to={`/network`}>
            <Rss24Filled />
            <h3>{t("Network")}</h3>
            <p>{t("Wi-fi")}</p>
          </NavLink>
        </li>
        <li key={5} className={styled.listItem}>
          <NavLink to="/personalization">
            <DrawText24Filled />
            <h3>{t("Personalization")}</h3>
            <p>{t("Background")}</p>
          </NavLink>
        </li>
        <li key={6} className={styled.listItem}>
          <NavLink to="/applications">
            <Scan24Regular />
            <h3>{t("Applications")}</h3>
            <p>{t("Delete")}</p>
          </NavLink>
        </li>
        <li key={7} className={styled.listItem}>
          <NavLink to="/accounts">
            <PersonSync24Regular />
            <h3>{t("Accounts")}</h3>
            <p>{t("Accountsand")}</p>
          </NavLink>
        </li>
        <li key={8} className={styled.listItem}>
          <NavLink to="/time">
            <Smartwatch24Regular />
            <h3>{t("Time")}</h3>
            <p>{t("Time")}</p>
          </NavLink>
        </li>
        <li key={9} className={styled.listItem}>
          <NavLink to="/games">
            <StarSettings24Regular />
            <h3>{t("Games")}</h3>
            <p>{t("Xbox and other")}</p>
          </NavLink>
        </li>
        <li key={10} className={styled.listItem}>
          <NavLink to="/search">
            <ZoomIn24Regular />
            <h3>{t("Search")}</h3>
            <p>{t("Searchmyfiles")}</p>
          </NavLink>
        </li>
        <li key={11} className={styled.listItem}>
          <NavLink to="/update">
            <StoreMicrosoft24Regular />
            <h3>{t("Updateandsecurity")}</h3>
            <p>{t("Updatewindows")}</p>
          </NavLink>
        </li>
        <li key={12} className={styled.listItem}>
          <NavLink to="/confidential">
            <Home24Filled />
            <h3>{t("Confidential")}</h3>
            <p>{t("Cameramicrophone")}</p>
          </NavLink>
        </li>
      </ul>
    </>
  );
};
export default Home;
