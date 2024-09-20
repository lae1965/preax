export interface ThemeData {
	id: number;
	name: string;
	background: {
		light: string;
		dark: string;
	};
	quizzes: Array<number>;
	createdAt: string;
	updatedAt: string;
}

export interface QuizData {
	id: number;
	title: string;
	image: string;
	steps: Array<number>;
	completedCount: number;
	rating: Array<number>;
	createdAt: string;
	updatedAt: string;
}

export interface UserData {
	id?: number;
	name?: string;
	password?: string;
	quizzes?: Array<QuizData> | null;
	createdAt?: string;
	updatedAt?: string;
}
