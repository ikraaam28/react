
import { z } from "zod";

// Définition du schéma de validation avec Zod
export const eventSchema = z.object({
  name: z.string().min(3, "Le nom doit contenir au moins 3 caractères"),
  description: z.string().min(10, "La description doit être plus détaillée"),
  price: z.preprocess((val) => Number(val), z.number().min(1, "Le prix doit être supérieur à 0")),
  nbTickets: z.preprocess((val) => Number(val), z.number().min(1, "Il faut au moins un ticket disponible")),
  nbParticipants: z.preprocess((val) => Number(val), z.number().min(0, "Les participants ne peuvent pas être négatifs")),
  image: z.instanceof(File, { message: "L'image est requise" }),
});