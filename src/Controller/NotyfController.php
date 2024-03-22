<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;

class NotyfController extends AbstractController
{
    #[Route('/', name: 'app_notyf')]
    public function index(Request $request): Response
    {
        $notyf = 'success';
        // $notyf = $request->get('notyf');
        // if(null !== $notyf){;
            // dd($notyf);
        $this->addFlash($notyf, 'This is a '.$notyf.' flash message.');
        // }

        return $this->render('notyf/index.html.twig', [
            'notyf' => 'success',
        ]);
    }
}
