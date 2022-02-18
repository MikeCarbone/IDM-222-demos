import CopyText from "../atoms/Copy"

const Footer = () => {
    return (
        <footer className="footer">
            <CopyText color="white">&copy; { new Date().getFullYear() } Mike Carbone </CopyText>
            <style jsx>{`
                .footer {
                    background-color: #303030;
                    padding: 50px;
                }
            `}</style>
        </footer>
    )
}

export default Footer
