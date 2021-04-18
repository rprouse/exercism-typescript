type Grade = Array<string>;
type Roster = Map<string, Grade>;

export default class GradeSchool {
  private _roster: Roster = new Map();

  addStudent(name: string, grade: number): void {
    // A student can't be in another grade
    this._roster.forEach((val, _) => {
      const idx = val.indexOf(name);
      if(idx !== -1)
        val.splice(idx);
    });

    const gradeStr = grade.toString();
    if(this._roster.has(gradeStr)) {
      this._roster.get(gradeStr)?.push(name);
    } else {
      this._roster.set(gradeStr, [name]);
    }
  }

  studentRoster(): Roster {
    const roster: Roster = new Map();
    this._roster.forEach((val, key) => {
      roster.set(key, val.slice().sort());
    });
    return roster;
  }

  studentsInGrade(grade: number): string[] {
    const gradeStr = grade.toString();
    const roster = this._roster.get(gradeStr)?.slice().sort();
    return roster === undefined ? [] : roster;
  }
}