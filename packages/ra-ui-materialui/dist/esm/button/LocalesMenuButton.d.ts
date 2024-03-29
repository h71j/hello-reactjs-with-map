/// <reference types="react" />
/**
 * Language selector. Changes the locale in the app and persists it in
 * preferences so that the app opens with the right locale in the future.
 *
 * @example
 *
 *     const MyAppBar: FC = props => (
 *         <AppBar {...props}>
 *             <Box flex="1">
 *                 <Typography variant="h6" id="react-admin-title"></Typography>
 *             </Box>
 *             <LocalesMenuButton
 *                 languages={[
 *                     { locale: 'en', name: 'English' },
 *                     { locale: 'fr', name: 'Français' },
 *                 ]}
 *             />
 *         </AppBar>
 *     );
 */
export declare const LocalesMenuButton: (props: LocalesMenuButtonProps) => JSX.Element;
export declare const LocalesMenuButtonClasses: {
    selectedLanguage: string;
};
export interface LocalesMenuButtonProps {
    languages?: {
        locale: string;
        name: string;
    }[];
}
//# sourceMappingURL=LocalesMenuButton.d.ts.map