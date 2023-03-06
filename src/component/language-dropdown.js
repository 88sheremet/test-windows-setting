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
    base: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "200px",
    },
    filledDarker: {
        backgroundColor: tokens.colorNeutralBackgroundInverted,
        "> label": {
          color: tokens.colorNeutralForegroundInverted2,
        },
      },
      wrapper:{
        marginTop: "20px",
        paddingLeft: "100px",
        paddingRight: "100px",
      }
    });

const Languageoption = (props) => {
    const styles = useStyles();
  const selectId = useId();
  const { t } = useTranslation();
    return(
        <div className={styles.wrapper}>
             <div className={mergeClasses(styles.field, styles.filledDarker)}>
        <label htmlFor={`${selectId}-filledDarker`}>{t('SelectLanguage')}</label>
        <Select id={`${selectId}-filledDarker`} appearance="filled-darker" onChange={props.onChange}>
          {/* <option>Select Language</option> */}
          <option value={'en'}>{t('English')}</option>
          <option value={'ru'}>{t('Russian')}</option>
        </Select>
      </div>
      {/* <div style={{marginTop:'50px'}}>
            <select onChange={props.onChange}>
                <option>Select Language</option>
                <option value={'en'}>English</option>
                <option value={'ru'}>Russian</option>
            </select>
        </div> */}
        </div>
        
    )
}
export default Languageoption;