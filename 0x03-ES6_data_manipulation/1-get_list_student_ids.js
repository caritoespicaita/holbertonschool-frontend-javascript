export default function getListStudentIds(ids) {
    if (!Array.isArray(ids)) {
        return [];
    }
    const id = ids.map(item => item.id);
    return id;
  }
