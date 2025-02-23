function initTheme() {
    const [isDark, setIsDark] = React.useState(false);
    const toggleTheme = () => {
        setIsDark(!isDark);
        document.body.classList.toggle('dark-mode');
    };
}

// function toggleTheme(darkMode) {
//     if (darkMode) {
//         document.documentElement.classList.add('dark');
//     } else {
//         document.documentElement.classList.remove('dark');
//     }
//     localStorage.setItem('darkMode', darkMode);
// }
