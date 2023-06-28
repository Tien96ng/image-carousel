export default function Image({ currAnimal }) {
    return <img className="animalImg" src={currAnimal.link} alt={currAnimal.name} />
}