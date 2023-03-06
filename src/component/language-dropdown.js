import {
  makeStyles,
  mergeClasses,
  Select,
  tokens,
  useId,
} from "@fluentui/react-components";
import * as React from "react";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  filledDarker: {
    backgroundColor: tokens.colorNeutralBackgroundInverted,
    "> label": {
      color: tokens.colorNeutralForegroundInverted2,
    },
  },
  wrapper: {
    marginTop: "20px",
    marginLeft: "100px",
    marginRight: "100px",
  },
});

const Languageoption = (props) => {
  const styles = useStyles();
  const selectId = useId();
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <div className={mergeClasses(styles.field, styles.filledDarker)}>
        <label htmlFor={`${selectId}-filledDarker`}>
          {t("SelectLanguage")}
        </label>
        <Select
          id={`${selectId}-filledDarker`}
          appearance="filled-darker"
          onChange={props.onChange}
        >
          <option value={"en"}>{t("English")}</option>
          <option value={"ru"}>{t("Russian")}</option>
        </Select>
      </div>
    </div>
  );
};
export default Languageoption;
