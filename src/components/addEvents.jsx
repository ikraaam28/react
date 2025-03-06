import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addEvent } from "../Service/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "./addEvents.css"; // Import du fichier CSS
import { eventSchema } from "../schemas/eventSchema";

const AddEvent = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  // ✅ Utilisation de React Hook Form avec Zod
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, touchedFields, isValid },
  } = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      nbTickets: "",
      nbParticipants: "",
      image: null,
    },
    mode: "onBlur", // ✅ Active la validation après que l'utilisateur quitte le champ
  });

  // ✅ Gérer le fichier image
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setValue("image", file); // Enregistre l'image dans React Hook Form
  };

  // ✅ Soumission du formulaire
  const onSubmit = async (data) => {
    try {
      await addEvent(data, image);
      navigate("/events");
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'événement :", error);
    }
  };

  return (
    <div className="add-event-form">
      <h2>Add New Event</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <label>Name:</label>
        <input type="text" {...register("name")} />
        {touchedFields.name && errors.name && <p className="error">{errors.name.message}</p>}

        {/* Description */}
        <label>Description:</label>
        <textarea {...register("description")} />
        {touchedFields.description && errors.description && <p className="error">{errors.description.message}</p>}

        {/* Price */}
        <label>Price:</label>
        <input type="number" {...register("price")} />
        {touchedFields.price && errors.price && <p className="error">{errors.price.message}</p>}

        {/* Tickets */}
        <label>Tickets:</label>
        <input type="number" {...register("nbTickets")} />
        {touchedFields.nbTickets && errors.nbTickets && <p className="error">{errors.nbTickets.message}</p>}

        {/* Participants */}
        <label>Participants:</label>
        <input type="number" {...register("nbParticipants")} />
        {touchedFields.nbParticipants && errors.nbParticipants && <p className="error">{errors.nbParticipants.message}</p>}

        {/* Image */}
        <label>Image:</label>
        <input type="file" onChange={handleFileChange} accept="image/*" />
        {touchedFields.image && errors.image && <p className="error">{errors.image.message}</p>}

        {/* ✅ Bouton désactivé tant que le formulaire n'est pas valide */}
        <button type="submit" disabled={!isValid} className={!isValid ? "disabled-button" : ""}>
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
