export interface ActorCast {
  adult: boolean;
  cast_id: number
  character: string
  credit_id: string
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string
  popularity: string
  profile_path: string
}

export interface ActorCrew {
  adult: boolean
  gender: number;
  id: number
  known_for_department: string;
  name: string
  original_name: string
  popularity: number
  profile_path: string
  credit_id: string;
  department: string
  job: string
}

export interface ActorResponse {
  cast: ActorCast;
  crew: ActorCrew;
  id: number;
}

export interface CrewAndCast {
  clone(ActorCast): ActorCast;
  clone(ActorCrew): ActorCast;
}
