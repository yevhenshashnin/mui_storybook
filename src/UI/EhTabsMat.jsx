import {useState, Component} from "react";
// import PropTypes from "prop-types";
// import warning from "warning";
// import { EhButton } from "../../components";
import {Tabs, Tab as MaterialTab, Box, Button} from "@mui/material";
import {Spacing, Colors, Typography, LineHeight} from "./style";
// import { LineHeight } from "../../style/variables";
// import { isNil } from "@evolent/roots";
import {useTheme} from "@mui/material/styles";

const getSizeStyle = ({size, orientation}) => {
    let sizeStyle = {};
    switch (size) {
        case "small":
            sizeStyle.fontSize = Typography.fontSizeSmall;
            sizeStyle.lineHeight = LineHeight.heading.small;
            sizeStyle.padding = '0.25rem';
            if (orientation === "vertical") sizeStyle.paddingLeft = '0.5625rem';
            if (orientation === "horizontal") sizeStyle.paddingBottom = '0.0625rem';
            break;
        case "medium":
            sizeStyle.fontSize = Typography.fontSizeMedium;
            sizeStyle.lineHeight = LineHeight.heading.normal;
            sizeStyle.padding = '0.5rem';
            if (orientation === "vertical") sizeStyle.paddingLeft = '0.8125rem';
            if (orientation === "horizontal") sizeStyle.paddingBottom = '0.3125rem';
            break;
        case "large":
            sizeStyle.fontSize = Typography.fontSizeLarge;
            sizeStyle.lineHeight = LineHeight.heading.normal;
            sizeStyle.padding = '0.75rem';
            if (orientation === "vertical") sizeStyle.paddingLeft = '1.3125rem';
            if (orientation === "horizontal") sizeStyle.paddingBottom = '0.5625rem';
            break;
    }

    return sizeStyle;
};

const TabPanel = (props) => {
    const {children, value, index, hideInactiveTabs, ...other} = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            className="scrollable-auto-tabpanel"
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index || hideInactiveTabs ? children : null}
        </div>
    );
};

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
//     hideInactiveTabs: PropTypes.bool,
// };

// class EhTabMat extends Component {
//     // static propTypes = {
//     //     label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]), // eslint-disable-line react/no-unused-prop-types
//     //     disabled: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
//     // };
// }

const EhTabsMat = ({
                       addButton,
                       size = "medium",
                       activeIndex = 0,
                       onChange,
                       children,
                       orientation = "horizontal",
                       hideInactiveTabs = false,
                       theme = 'default',
                       ...tabProps
                   }) => {
    const [tabIndex, setTabIndex] = useState(activeIndex);
    const {palette} = useTheme();
    onChange && tabIndex !== activeIndex && setTabIndex(activeIndex);

    const handleChange = (event, newValue) => {
        onChange &&
        onChange(event, {
            activeIndex: newValue,
            children,
        });
        setTabIndex(newValue);
    };

    // warning(
    //     Children.toArray(children).every(
    //         (child) => child.type.name === "EhTabMat" || isNil(child)
    //     ),
    //     "EhTabsMat can only have Tab as children"
    // );

    return (
        <Box sx={{
            display: orientation === "vertical" ? "inline-flex" : "block"
        }} className={`container`}>
            <Box
                sx={{
                    display: orientation === "vertical" ? "inline-flex" : "flex",
                    justifyContent: orientation === "vertical" ? "flex-start" : "space-between",
                    borderBottom: orientation === "horizontal" ? `${Spacing.borderWidthThin} solid rgba(34,36,38,.15)` : "none",
                    flexDirection: orientation === "horizontal" ? "row" : "column",
                    alignItems: "flex-end",
                    marginBottom: Spacing.spacingSmall,
                    '.MuiTabs-root': {
                        minHeight: 0,
                    },
                    '.MuiTabs-indicator': {
                        backgroundColor: 'inherit',
                    }
                }}
                className={`tabContainer`}>
                <Tabs
                    orientation={orientation}
                    value={tabIndex}
                    onChange={handleChange}
                    {...tabProps}
                >
                    {children.map((child, index) => {
                        return (
                            // !isNil(child) && (
                            <MaterialTab
                                sx={{
                                    fontWeight: index === tabIndex ? Typography.fontWeightBold : Typography.fontWeightRegular,
                                    color: Colors.blue[100],
                                    opacity: 1,
                                    textTransform: 'none',
                                    minWidth: 0,
                                    minHeight: 0,
                                    maxWidth: '100%',
                                    ...getSizeStyle({size, orientation}),
                                    ...(index === tabIndex && {
                                        '&:hover': {
                                            backgroundColor: Colors.blue[25],
                                        },
                                    }),
                                    '&.Mui-selected': {
                                        background: palette.mode === 'dark' ? 'white' : '',
                                        color: Colors.grey[100],
                                        borderBottom: orientation === "horizontal" ? `${Spacing.borderWidthThick} solid ${Colors.grey[100]}` : "none",
                                        borderLeft: orientation === "vertical" ? `${Spacing.borderWidthThick} solid ${Colors.grey[100]}` : "none",
                                    },
                                    '&.MuiTab-root': {
                                        alignItems: orientation === "vertical" ? "start" : "center",
                                    },
                                    '&.MuiButtonBase-root:hover': {
                                        backgroundColor: Colors.blue[25],
                                    },
                                }}
                                key={index}
                                value={index}
                                label={child.props.label}
                                disabled={child.props.disabled}
                            />
                            // )
                        );
                    })}
                </Tabs>
                {addButton && (
                    <Button
                        key="ehtabs-button"
                        className="ehtabs-button"
                        onClick={addButton.onClick}
                        data-aq={`btn-${addButton.text}`}
                    >{addButton.text}</Button>
                )}
            </Box>
            {children.map((child, index) => {
                return (
                    // !isNil(child) && (
                    <TabPanel
                        hideInactiveTabs={hideInactiveTabs}
                        value={tabIndex}
                        key={index}
                        index={index}
                    >
                        {child.props.children}
                    </TabPanel>
                    // )
                );
            })}
        </Box>
    );
};

// EhTabsMat.Tab = EhTabMat;

// EhTabsMat.propTypes = {
//     children: PropTypes.array,
//     addButton: PropTypes.shape(EhButton.propTypes),
//     onChange: PropTypes.func,
//     activeIndex: PropTypes.number,
//     orientation: PropTypes.oneOf(["horizontal", "vertical"]),
//     size: PropTypes.oneOf(["small", "medium", "large"]),
//     // this flag will determine if it should unmount the non selected tabs or just hide it. By default this flag will be false
//     hideInactiveTabs: PropTypes.bool,
// };

export default EhTabsMat;
