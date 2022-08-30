const AuthTitle = ({ title, subtitle }) => (
  <>
    <h3 className="text-warning">{title}</h3>
    {subtitle && <p className="text-secondary">{subtitle}</p>}
  </>
)

export default AuthTitle
