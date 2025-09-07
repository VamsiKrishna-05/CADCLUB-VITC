export interface Member {
  name: string;
  position: string;
  image: string;
  department?: string;
  year?: string;
}

export const faculty: Member[] = [
  {
    name: "Dr. Rajesh Kumar",
    position: "Faculty Advisor & HOD",
    department: "Mechanical Engineering Department",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Dr. Priya Sharma",
    position: "Technical Mentor",
    department: "Design Engineering Specialist",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Prof. Anand Krishnan",
    position: "Industry Liaison",
    department: "CAD Software Expert",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
  }
];

export const students: Member[] = [
  {
    name: "Arjun Mehta",
    position: "President",
    year: "Final Year - Mechanical",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Sneha Patel",
    position: "Vice President",
    year: "Third Year - Aerospace",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Rohan Singh",
    position: "Technical Head",
    year: "Third Year - Civil",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Kavya Reddy",
    position: "Events Coordinator",
    year: "Second Year - Automobile",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Vikash Kumar",
    position: "Secretary",
    year: "Third Year - Mechanical",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Aditya Sharma",
    position: "Treasurer",
    year: "Second Year - Electrical",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Meera Joshi",
    position: "Project Manager",
    year: "Third Year - Industrial",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
  },
  {
    name: "Karthik Raj",
    position: "Marketing Head",
    year: "Second Year - Computer Science",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
  }
];
