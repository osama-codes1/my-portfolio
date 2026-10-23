import useApi from '../useApi';
import { getSkills } from '../api';

function groupByCategory(skills) {
  return skills.reduce((groups, skill) => {
    if (!groups[skill.category]) groups[skill.category] = [];
    groups[skill.category].push(skill);
    return groups;
  }, {});
}

function Skills() {
  const { data: skills, loading, error } = useApi(getSkills);

  if (loading) {
    return <p className="projects-loading">Loading skills...</p>;
  }

  if (error) {
    return <p className="projects-error">Could not load skills. Please try again later.</p>;
  }

  const grouped = groupByCategory(skills);

  return (
    <div className="skill-groups">
      {Object.entries(grouped).map(([category, items]) => (
        <div className="skill-group" key={category}>
          <h4>{category}</h4>
          <div className="chips">
            {items.map((s) => (
              <span className="chip" key={s.id}>{s.name}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;