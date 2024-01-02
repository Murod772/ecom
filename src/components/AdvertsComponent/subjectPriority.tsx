type SubjectPriority = {
  id: number;
  name: string;
  position: number;
};

type SubjectPriorityProps = {
  subjectPriorities: SubjectPriority[];
};

// Define the component
const SubjectPriorityComponent: React.FC<SubjectPriorityProps> = ({
  subjectPriorities,
}) => {
  return (
    <div className="subject-priority-list p-2 container mx-auto mt-10 px-6 py-6 rounded-2xl bg-white shadow-custom">
      <h3 className="text-lg font-semibold mb-2">Приоритет категорий</h3>
      <ul className="list-none pl-5">
        {subjectPriorities.map((priority) => (
          <li key={priority.id} className="mb-1">
            {priority.position}. {priority.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubjectPriorityComponent;
