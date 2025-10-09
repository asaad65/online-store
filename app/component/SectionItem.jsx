export default function SectionItem({ name, slug, selected , mood }) {
  const style = {
    background: selected ? '#ff8c00' : '#fff',
    color: selected ? '#fff' : '#000',
    padding: '10px',
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '10px',
    textAlign: 'center',
    fontWeight: 'bold',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    transition: '0.3s'
  };

  return <p style={ mood == 'SectionPro'?{}:style}>{name}</p>;
}