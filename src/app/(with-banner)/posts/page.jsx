import { Suspense } from "react";
import { ListOfPosts } from "./ListOfPosts";
import { LoadingComponent } from "@/components/Loading";

export default async function PostsPage () {
    
    return (
      <div>
        Lista de Posts
        <hr />
        <Suspense fallback={LoadingComponent()}>
          <ListOfPosts />
        </Suspense>
      </div>
    )
  }
  